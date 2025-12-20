document.addEventListener('alpine:init', () => {
Alpine.store('tasks', {
    novoItem: '',
    items: [],
    filter: 'all',
    
    get list() {
        if (this.filter === 'done') 
            return this.items.filter(i => i.done);
        return this.items;
    },

    add() {
        if (!this.novoItem) return
        this.items.push({text: this.novoItem, done: false});
        this.novoItem = '';
    },

})
})
