// Инициализация игрового поля (3х3), заполненного нулями (0 - пусто, 1 - X, 2 - O)
let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

// Переменная для отслеживания очереди (true - ходит X, false - ходит O)
let isXTurn = true;

// Функция обработки клика
canvas_1.addEventListener('click', function(event) {
    // Получаем реальные координаты клика относительно холста
    const rect = canvas_1.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Вычисляем индекс ячейки в сетке (0, 1 или 2)
    const cellX = Math.floor(clickX / scale);
    const cellY = Math.floor(clickY / scale);

    // Проверяем, что клик в пределах сетки
    if (cellX >= 0 && cellX < stolb && cellY >= 0 && cellY < stok) {
        
        // Проверяем, пуста ли ячейка (в массиве board строки — это Y, столбцы — это X)
        if (board[Number(cellY)][Number(cellX)] === 0) {
            
            if (isXTurn) {
                X(Number(cellX), Number(cellY));          // Рисуем крестик
                board[Number(cellY)][Number(cellX)] = 1;  // Записываем в логику поля, что тут X
            } else {
                o(Number(cellX), Number(cellY));          // Рисуем нолик
                board[Number(cellY)][Number(cellX)] = 2;  // Записываем в логику поля, что тут O
            }
            
            // Меняем ход на противоположный
            isXTurn = !isXTurn; 
            
            console.log(`Ход сделан в ячейку [${cellX}, ${cellY}]. Текущее поле:`, board);
        } else {
            console.log("Эта ячейка уже занята!");
        }
    }
});

