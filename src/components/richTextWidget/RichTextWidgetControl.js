import React, { PureComponent } from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

// Note that control component of a custom widget can't be
// a functional component. It will not work for some reason.
export class RichTextWidgetControl extends React.Component {
    constructor () {
      super();
  
      this.handleModelChange = this.handleModelChange.bind(this);
  
      this.state = {
        model: 'Example text'
      };
    }
  
    handleModelChange = (model) => {
      this.setState({
        model: model
      });
      this.props.onChange(model);
    }
  
    render () {
      return <FroalaEditor
                model={this.state.model}
                onModelChange={this.handleModelChange}
             />
    }
  }