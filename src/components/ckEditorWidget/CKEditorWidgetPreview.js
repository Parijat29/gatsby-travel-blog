import React from 'react';

export const CKEditorWidgetPreview = (props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: props.value}} />
  );
}