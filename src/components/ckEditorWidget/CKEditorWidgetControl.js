import React, { PureComponent } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export class CKEditorWidgetControl extends PureComponent {
  onChange = (event, editor) => {
    const data = editor.getData();
    this.props.onChange(data);
  }

  render() {
    var value = this.props.value;
    return (
      <CKEditor
        editor={ ClassicEditor }
        data={value}
        onChange={this.onChange}
      />
    );
  }
}