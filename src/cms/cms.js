import CMS from 'netlify-cms-app';
import { RichTextWidgetControl, RichTextWidgetPreview } from '../components/richTextWidget';

CMS.registerWidget('richtext', RichTextWidgetControl, RichTextWidgetPreview);