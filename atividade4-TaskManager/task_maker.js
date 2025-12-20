document.addEventListener('alpine:init', () => {
Alpine.store('tasks', {
    novoItem: '',
    items: [],
    filter: 'all',
    
    get list() {
        if (this.filter === 'done') 
            return this.items.filter(item => item.done);
        if (this.filter === 'todo')
            return this.items.filter(item => !item.done);
        return this.items;
    },

    add() {
        if (!this.novoItem) return
        this.items.push({text: this.novoItem, done: false});
        this.novoItem = '';
    },

    remove(item_removido) {
        this.items = this.items.filter(item => item !== item_removido)
    }

})
})
