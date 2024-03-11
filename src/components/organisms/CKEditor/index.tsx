import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import React, { useEffect, useRef } from "react";

type Props = {
  form: any;
  name: any;
  editorLoaded?: boolean;
};

const CKEditor = (props: Props) => {
  const editorRef = useRef<any>();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  return (
    <>
      {props.editorLoaded ? (
        <div>
          <CKEditor
            editor={ClassicEditor}
            data={props.form.getValues(name)}
            onChange={(event: any, editor: any) => {
              const data = editor.getData();
              props.form.setValue(name, data);
            }}
          />
          <FormField
            control={props.form.control}
            name={props.name}
            render={({ field }) => (
              <FormItem>
                <FormMessage className="mt-3" />
              </FormItem>
            )}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CKEditor;
