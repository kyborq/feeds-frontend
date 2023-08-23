import { ChangeEvent, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { Avatar } from "../Avatar/Avatar";
import { Button } from "../Button/Button";
import { combine } from "../../utils/combine";

import styles from "./Form.module.css";
import { Attachment } from "./Attachment";
import { useOnClickOutside } from "usehooks-ts";

export const PostForm = () => {
  const [content, setContent] = useState("");
  const [attachment, setAttachment] = useState("");

  const [expanded, setExpanded] = useState(false);

  const expandForm = () => setExpanded(true);

  const minimizeForm = () => {
    if (!content.length && !attachment) {
      setExpanded(false);
    }
  };

  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length < 255) {
      setContent(e.target.value);
    }
  };

  const pickerRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleAttachment = () => {
    pickerRef.current?.click();
  };

  const pickAttachment = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      const pickedFile = event.target.files[0];
      const objectUrl = URL.createObjectURL(pickedFile);
      setAttachment(objectUrl);
    }
  };

  useOnClickOutside(textRef, minimizeForm);

  return (
    <div
      className={combine(styles.Form, expanded && styles.Expanded)}
      onClick={() => textRef.current?.focus()}
    >
      <div className={styles.Content}>
        <Avatar />
        <div className={styles.Input}>
          <input
            ref={pickerRef}
            type="file"
            accept="image/*"
            onChange={pickAttachment}
            style={{ display: "none" }}
          />
          <TextareaAutosize
            ref={textRef}
            placeholder="Write about your feelings"
            className={styles.TextArea}
            onFocus={expandForm}
            onChange={handleText}
            value={content}
          />
        </div>
      </div>
      {attachment && (
        <Attachment
          src={attachment}
          onDelete={() => {
            setAttachment("");
          }}
        />
      )}
      <div className={styles.Actions}>
        <Button icon="camera" onClick={handleAttachment} />
        {expanded && (
          <Button label="Опубликовать" primary onClick={minimizeForm} />
        )}
      </div>
    </div>
  );
};
