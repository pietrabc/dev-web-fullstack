  // To-Do List Functionality
        const todoInput = document.getElementById('todo-input');
        const addTodoButton = document.getElementById('add-todo');
        const todoList = document.getElementById('todo-list');

        addTodoButton.addEventListener('click', () => {
            const taskText = todoInput.value.trim();
            if (taskText) {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="task-text">${taskText}</span>
                    <button class="delete-btn ml-2 text-red-500 hover:text-red-700">X</button>
                `;
                li.addEventListener('click', () => li.firstElementChild.classList.toggle('task-completed'));
                li.querySelector('.delete-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    li.remove();
                });
                todoList.appendChild(li);
                todoInput.value = '';
            }
        });

        // Calendar Functionality
        const prevMonthBtn = document.getElementById('prev-month');
        const nextMonthBtn = document.getElementById('next-month');
        const monthYearDisplay = document.getElementById('month-year');
        const calendarGrid = document.getElementById('calendar-grid');
        const eventInput = document.getElementById('event-input');
        const addEventBtn = document.getElementById('add-event');
        const eventsList = document.getElementById('events-list');

        let currentDate = new Date();
        let selectedDate = null;
        const events = {};

        function renderCalendar() {
            calendarGrid.innerHTML = '';
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            monthYearDisplay.textContent = `${new Date(year, month).toLocaleString('pt-BR', { month: 'long' })} ${year}`;

            const firstDay = new Date(year, month, 1).getDay();
            const lastDay = new Date(year, month + 1, 0).getDate();

            for (let i = 0; i < firstDay; i++) {
                const emptyDiv = document.createElement('div');
                calendarGrid.appendChild(emptyDiv);
            }

            for (let day = 1; day <= lastDay; day++) {
                const dayDiv = document.createElement('div');
                dayDiv.textContent = day;
                dayDiv.classList.add('text-center', 'p-2', 'calendar-day');
                dayDiv.addEventListener('click', () => selectDate(new Date(year, month, day)));
                if (selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year) {
                    dayDiv.classList.add('bg-blue-300');
                }
                calendarGrid.appendChild(dayDiv);
            }
        }

        function selectDate(date) {
            selectedDate = date;
            renderCalendar();
            renderEvents();
        }

        function renderEvents() {
            eventsList.innerHTML = '';
            if (selectedDate) {
                const dateKey = selectedDate.toDateString();
                if (events[dateKey]) {
                    events[dateKey].forEach(event => {
                        const li = document.createElement('li');
                        li.textContent = event;
                        eventsList.appendChild(li);
                    });
                }
            }
        }

        addEventBtn.addEventListener('click', () => {
            const eventText = eventInput.value.trim();
            if (eventText && selectedDate) {
                const dateKey = selectedDate.toDateString();
                if (!events[dateKey]) events[dateKey] = [];
                events[dateKey].push(eventText);
                eventInput.value = '';
                renderEvents();
            }
        });

        prevMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });

        nextMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });

        renderCalendar();

        // Expense Calculator Functionality
        const expenseDesc = document.getElementById('expense-description');
        const expenseAmount = document.getElementById('expense-amount');
        const expenseType = document.getElementById('expense-type');
        const addExpenseBtn = document.getElementById('add-expense');
        const expenseList = document.getElementById('expense-list');
        const totalIncomeSpan = document.getElementById('total-income');
        const totalExpenseSpan = document.getElementById('total-expense');
        const balanceSpan = document.getElementById('balance');

        let totalIncome = 0;
        let totalExpense = 0;

        function updateTotals() {
            totalIncomeSpan.textContent = `R$ ${totalIncome.toFixed(2)}`;
            totalExpenseSpan.textContent = `R$ ${totalExpense.toFixed(2)}`;
            balanceSpan.textContent = `R$ ${(totalIncome - totalExpense).toFixed(2)}`;
        }

        addExpenseBtn.addEventListener('click', () => {
            const desc = expenseDesc.value.trim();
            const amount = parseFloat(expenseAmount.value);
            const type = expenseType.value;

            if (desc && !isNaN(amount)) {
                const li = document.createElement('li');
                li.textContent = `${type === 'income' ? '+' : '-'} R$ ${amount.toFixed(2)} - ${desc}`;
                li.classList.add(type === 'income' ? 'text-green-600' : 'text-red-600');
                expenseList.appendChild(li);

                if (type === 'income') {
                    totalIncome += amount;
                } else {
                    totalExpense += amount;
                }

                updateTotals();
                expenseDesc.value = '';
                expenseAmount.value = '';
            }
        });