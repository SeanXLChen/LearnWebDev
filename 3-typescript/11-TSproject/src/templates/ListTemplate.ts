import FullList from '../model/FullList';

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void,
}

export default class ListTemplate implements DOMList {
    ul: HTMLUListElement;

    static instance: ListTemplate = new ListTemplate();

    private constructor() {
        this.ul = document.getElementById('listItems') as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = '';
    }

    render(fullList: FullList): void {
        this.clear();

        fullList.list.forEach(eachItem => {
            const li = document.createElement('li');
            li.className = 'item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = eachItem.id;
            checkbox.checked = eachItem.checked;
            checkbox.addEventListener('change', () => {
                eachItem.checked = checkbox.checked;
                fullList.save();
            });

            const label = document.createElement('label');
            label.htmlFor = eachItem.id;
            label.textContent = eachItem.item;

            const button = document.createElement('button');
            button.className = 'button';
            button.textContent = 'X';
            button.addEventListener('click', () => {
                fullList.removeItem(eachItem.id);
                this.render(fullList);
            });

            li.appendChild(checkbox);
            li.appendChild(label);
            li.appendChild(button);
            this.ul.appendChild(li);
        });
    }
}