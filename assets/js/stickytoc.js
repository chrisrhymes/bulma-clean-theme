function attachStickyMenuObserver(min, max) {
    const headers = [...Array(max-min + 1).keys()].map(i=>`h${i+min}[id]`);
    window.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver(_ => {
            document.querySelectorAll(`div.contents li > a.is-active`).forEach(e => {
                e.classList.remove`is-active`;
            });
            var candidate = null;
            [...document.querySelectorAll(headers)].every(e => {
                const r = e.getBoundingClientRect();
                if (!candidate || r.top < (window.innerHeight || document.documentElement.clientHeight)) {
                    candidate = e;
                }
                return r.bottom <= 0;
            });
            if (candidate) {
                const id = candidate.getAttribute('id');
                document.querySelector(`div.contents li > a[href="#${id}"]`).classList.add`is-active`;
            }
        });
        document.querySelectorAll(headers).forEach(e => {
            observer.observe(e);
        });
    });
}
