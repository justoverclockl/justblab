import app from 'flarum/admin/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('justoverclock/justblab', () => {
  registerWidget(app);
  app.extensionData
    .for('justoverclock-justblab')
    .registerSetting({
      setting: 'justoverclock-justblab.absoluteEndpoint',
      name: 'justoverclock-justblab.absoluteEndpoint',
      type: 'url',
      placeholder: 'https://justblab.com/baxf/widget.php?q=online_usr',
      label: app.translator.trans('justoverclock-justblab.admin.absoluteEndpoint'),
      help: app.translator.trans('justoverclock-justblab.admin.absoluteEndpoint-help'),
    })
    .registerSetting({
      setting: 'justoverclock-justblab.onlineUserLabel',
      name: 'justoverclock-justblab.onlineUserLabel',
      type: 'text',
      label: app.translator.trans('justoverclock-justblab.admin.onlineUserLabel'),
      help: app.translator.trans('justoverclock-justblab.admin.onlineUserLabel-help'),
    })
});
