$(this.searchInput).keyup(
            this.delay((e) => {
                this.search();
            }, 750)
        );
        

delay(fn, ms) {
        let timer = 0
        return function(...args) {
            clearTimeout(timer)
            timer = setTimeout(fn.bind(this, ...args), ms || 0)
        }
    }
