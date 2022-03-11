import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import AddBlabWidget from './components/AddBlabWidget';

export default function(app) {
  (new Widgets).add({
    key: 'blabWidget',
    component: AddBlabWidget,
    isDisabled: false,
    isUnique: true,
    placement: 'end',
    position: 1,
  }).extend(app, 'justoverclock-justblab');
};
