import m from 'mithril';

export default {
  view() {
		return m('ul', [
			m('li', "New Project"),
			m('li', "Save Project"),
			m('li', "Character Generator"),
		]);
  }
} as m.Component;
