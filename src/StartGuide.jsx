export default function StartGuide() {
    return (
      <div className="start-guide">
        <h1>Вы начали делать задание React+JS</h1>
        <ol>
          <li>
            <strong>Инициализируйте локальный репозиторий:</strong><br />
            Откройте терминал в папке проекта и выполните команду:<br />
            <code>git init</code><br />
            Убедитесь, что в папке появилась скрытая папка <code>.git</code>.
            (Если вы делаете задание в колледже - делайте на рабочем столе!)
          </li>
  
          <li>
            <strong>Создайте репозиторий в GitHub-организации:</strong><br />
            Зайдите на GitHub, в организацию MobileDevTISBI.<br />
            Нажмите "New repository", укажите имя по шаблону из задания (<strong>БЕЗ КИРИЛИЦЫ</strong>),<br />
            <strong>НЕ ставьте галочку</strong> "Initialize this repository with a README",<br/>
            <strong>УБЕДИТЕСЬ</strong> что ваш репозиторий приватный.
          </li>
  
          <li>
            <strong>Свяжите локальный репозиторий с удалённым:</strong><br />
            В терминале выполните:<br />
            <code>git remote add origin &lt;ссылка_на_ваш_репозиторий&gt;</code><br />
            Пример: <code>git remote add origin https://github.com/MobileDevTISBI/your-repo.git</code>
          </li>
  
          <li>
            <strong>Если вы в колледже:</strong><br />
            Чтобы git работал:<br />
            Запустите скрипт РМП/Настроить git.bat
          </li>

          <li>
            <strong>Закомитьте изменения:</strong><br />
            Сначала добавьте файлы к коммиту:<br />
            <code>git add .</code><br />
            Затем сделайте коммит:<br />
            <code>git commit -a -m "Initial commit"</code>
            (или через интерфейс VS Code, но не забудьте про название коммита)
          </li>
  
          <li>
            <strong>Запушьте изменения:</strong><br />
            Выполните команду:<br />
            <code>git push -u origin master</code>
            (или через интерфейс VS Code, но не забудьте про название коммита)
          </li>
  
          <li>
            <strong>Что делать дальше:</strong><br />
            — Удалите этот компонент <code>StartGuide.jsx</code> из проекта.<br />
            — Не трогайте файл <code>index.html</code>, он настроен правильно.<br />
            — Создавайте новые компоненты согласно заданию.
          </li>
        </ol>
      </div>
    );
  }