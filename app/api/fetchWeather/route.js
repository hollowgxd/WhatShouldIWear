export async function GET(req) {
    try {
        // Получаем данные (замени на свой URL)
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weather_code,pressure_msl,visibility,wind_speed_10m,wind_direction_10m");
        const rawData = await response.json();

        // Достаем почасовые данные
        const { hourly } = rawData;

        // Проверяем, есть ли данные
        if (!hourly || !hourly.time) {
            return new Response(JSON.stringify({ error: "Некорректный формат данных" }), { status: 500 });
        }

        // Функция для преобразования даты в день недели
        const getDayOfWeek = (dateString) => {
            const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
            return days[new Date(dateString).getDay()];
        };

        // Карта описаний погоды по WMO-кодам
        const weatherDescriptions = {
            0: "Ясно",
            1: "Преимущественно ясно",
            2: "Переменная облачность",
            3: "Пасмурно",
            45: "Туман",
            48: "Туман с изморозью",
            51: "Легкая морось",
            53: "Умеренная морось",
            55: "Сильная морось",
            61: "Небольшой дождь",
            63: "Умеренный дождь",
            65: "Ливень",
            71: "Небольшой снег",
            73: "Умеренный снег",
            75: "Сильный снег",
            95: "Гроза"
        };

        // Группируем данные по дням
        const dailyData = {};
        hourly.time.forEach((timestamp, index) => {
            const day = getDayOfWeek(timestamp);
            if (!dailyData[day]) {
                dailyData[day] = {
                    temperatures: [],
                    weather_codes: []
                };
            }
            dailyData[day].temperatures.push(hourly.temperature_2m[index]);
            dailyData[day].weather_codes.push(hourly.weather_code[index]);
        });

        // Формируем прогноз на 5 дней
        const daily_forecast = Object.keys(dailyData).slice(0, 5).map(day => {
            const temps = dailyData[day].temperatures;
            const weatherCode = dailyData[day].weather_codes[0] || 0; // Берем первый код
            return {
                day_of_week: day,
                weather_description: weatherDescriptions[weatherCode] || "Неизвестно",
                temperature_min: Math.min(...temps),
                temperature_max: Math.max(...temps)
            };
        });

        // Формируем ответ
        const formattedData = {
            current_weather: {
                city: "Стокгольм", // Если API отдает город — вставь динамически
                temperature: hourly.temperature_2m[0], // Берем первую температуру
                weather_description: weatherDescriptions[hourly.weather_code[0]] || "Неизвестно"
            },
            daily_forecast,
            additional_info: {
                feels_like: hourly.apparent_temperature[0] || null,
                uv_index: hourly.uv_index[0] || null,
                wind_speed: hourly.wind_speed_10m[0] || null,
                humidity: hourly.relative_humidity_2m[0] || null,
                precipitation: hourly.precipitation[0] || 0,
                visibility: hourly.visibility[0] ? hourly.visibility[0] / 1000 : null, // В км
                pressure: hourly.pressure_msl[0] || null
            }
        };

        return new Response(JSON.stringify(formattedData), { status: 200 });
    } catch (error) {
        console.error("Ошибка при обработке данных:", error);
        return new Response(JSON.stringify({ error: "Ошибка сервера" }), { status: 500 });
    }
}
