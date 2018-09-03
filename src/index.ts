const m = require('mithril');
import nav from './components/nav';

const root = document.getElementById('root')

const c = {
	view(v) {
		return m('h1', 'title!!!!!!!!!!!!');
	}
}

m.render(root, m(nav));
