document.addEventListener('DOMContentLoaded', () => {
    const addBoardBtn = document.getElementById('add-board-btn');
    const boardContainer = document.getElementById('boards-container');

    addBoardBtn.addEventListener('click', () => {
        const board = createBoard();
        boardContainer.appendChild(board);
    });
});

function createBoard() {
    const board = document.createElement('div');
    board.classList.add('board');

    const boardHeader = document.createElement('div');
    boardHeader.classList.add('board-header');

    const boardTitle = document.createElement('h2');
    boardTitle.textContent = 'New Board';
    boardHeader.appendChild(boardTitle);

    const addCardBtn = document.createElement('button');
    addCardBtn.textContent = 'Add Card';
    addCardBtn.addEventListener('click', () => {
        const card = createCard();
        board.appendChild(card);
    });

    boardHeader.appendChild(addCardBtn);
    board.appendChild(boardHeader);
    return board;

}

function createCard() {

    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = 'New Card';
    return card;

}


function createBoard() {
    const board = document.createElement('div');
    board.classList.add('board');

    const boardHeader = document.createElement('div');
    boardHeader.classList.add('board-header');

    const boardTitle = document.createElement('h2');
    boardTitle.contentEditable = true;
    boardTitle.textContent = 'New Board';
    boardHeader.appendChild(boardTitle);

    const addCardBtn = document.createElement('button');
    addCardBtn.textContent = 'Add Card';
    addCardBtn.addEventListener('click', () => {
        const card = createCard();
        board.appendChild(card);
    });
    boardHeader.appendChild(addCardBtn);

    board.appendChild(boardHeader);

    return board;
}

function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    card.contentEditable = true;
    card.textContent = 'New Card';
    return card;
}


function saveBoards() {
    const boards = [];
    document.querySelectorAll('.board').forEach(board => {
        const boardData = {
            title: board.querySelector('h2').textContent,
            cards: []
        };
        board.querySelectorAll('.card').forEach(card => {
            boardData.cards.push(card.textContent);
        });
        boards.push(boardData);
    });
    localStorage.setItem('boards', JSON.stringify(boards));
}

function loadBoards() {
    const boards = JSON.parse(localStorage.getItem('boards')) || [];
    const boardsContainer = document.getElementById('boards-container');
    boards.forEach(boardData => {
        const board = createBoard();
        board.querySelector('h2').textContent = boardData.title;
        boardData.cards.forEach(cardText => {
            const card = createCard();
            card.textContent = cardText;
            board.appendChild(card);
        });
        boardsContainer.appendChild(board);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadBoards();
    document.getElementById('add-board-btn').addEventListener('click', () => {
        const board = createBoard();
        document.getElementById('boards-container').appendChild(board);
        saveBoards();
    });
});
