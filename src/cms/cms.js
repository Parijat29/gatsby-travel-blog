import CMS from 'netlify-cms-app';
import { CKEditorWidgetControl, CKEditorWidgetPreview } from '../components/ckEditorWidget';
import { RichTextWidgetControl, RichTextWidgetPreview } from '../components/richTextWidget';

CMS.registerWidget('ckEditorwidget', CKEditorWidgetControl, CKEditorWidgetPreview);
CMS.registerWidget('richtext', RichTextWidgetControl, RichTextWidgetPreview);
