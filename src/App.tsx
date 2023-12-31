import { FC, Fragment } from 'react';

import './App.css';

// 1. Получить данные с endpoint /todos (API: https://jsonplaceholder.typicode.com) при помощи rtkQuery (другим методом, если не использовал rtkQuery);
// 2. Создать таблицу (без стилей) и отрендерить в ней данные;
// 3. Компонент Таблица должен быть переиспользуемым (к примеру рендерить другие данные или другой порядок колонок);
// 3. Создать конвертер для boolean значения из поля "completed", который будет возвращать строку "Completed" / "Uncompleted";
// 4. Колонки для таблицы ( очередность для рендеринга данных ):
// 	a. поле completed;
// 	b. поле title;
// 	c. поле userId;

const App: FC = () => <Fragment>Interview Page</Fragment>;
export default App;
