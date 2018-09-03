import m from 'mithril';
import nav from './components/nav';

const c = {
	view() {
		return m('h1', 'title!!!!!!!!!!!!');
	}
}

const root = document.getElementById('root')
if(root){
	m.render(root, m(nav));
}

