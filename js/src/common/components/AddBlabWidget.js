import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';
import app from 'flarum/forum/app';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Link from "flarum/common/components/Link";

export default class AddJustBlabComponent extends Widget {
  oninit(vnode) {
    super.oninit(vnode)
    this.loading = true;

    const endPoint = app.forum.attribute('justoverclock-justblab.absoluteEndpoint');

    fetch(endPoint)
      .then((res) => res.json()
        .then((data) => {
          this.data = data
          this.loading = false
          m.redraw();
          console.log(this.data)
        })
      )

  }

  oncreate(vnode) {
    super.oncreate(vnode)

  }

  className() {
    // css class for the container
    return 'justBlab-widget';
  }

  content() {
    if (this.loading) {
      return <LoadingIndicator />;
    }
    const label = app.forum.attribute('justoverclock-justblab.onlineUserLabel') || 'Online Users:'
    if (typeof this.data === 'undefined') return;
    return (
      <div className="justblab-user-online">
        <h3 className="justBlab-title">{label}</h3>
        {Object.keys(this.data).map((users) => {
          console.log(this.data[users])
          return (
            <ul className="justBlab-ul">
              <li className="justBlab-list"><i className="fas fa-user justBlab"/> {this.data[users]}</li>
            </ul>
          )
        })}
      </div>
    )
  }
}
