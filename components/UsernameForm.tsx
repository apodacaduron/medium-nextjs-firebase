import debounce from 'lodash.debounce';
import React, {
    ChangeEvent, FC, FormEvent, FormEventHandler, useCallback, useContext, useEffect, useState
} from 'react';

import { UserContext } from '../lib/context';
import { firestore } from '../lib/firebase';

const UsernameForm: FC = () => {
  const [formValue, setFormValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, username } = useContext(UserContext);

  const checkUsername = useCallback(
    debounce(async (username: string) => {
      if (username.length >= 3) {
        const ref = firestore.doc(`usernames/${username}`);
        const { exists } = await ref.get();
        console.log("firestore read executed!");
        setIsValid(!exists);
        setLoading(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    checkUsername(formValue);
  }, [formValue]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase();
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    if (val.length < 3) {
      setFormValue(val);
      setLoading(false);
      setIsValid(false);
    }

    if (re.test(val)) {
      setFormValue(val);
      setLoading(true);
      setIsValid(false);
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userDoc = firestore.doc(`users/${user?.uid}`);
    const usernameDoc = firestore.doc(`usernames/${formValue}`);

    const batch = firestore.batch();
    batch.set(userDoc, {
      username: formValue,
      photoURL: user?.photoURL,
      displayName: user?.displayName,
    });
    batch.set(usernameDoc, { uid: user?.uid });

    await batch.commit();
  };

  const UsernameMessage: FC = () => {
    if (loading) {
      return <div>checking...</div>;
    } else if (isValid) {
      return <div className="text-success">{formValue} is available</div>;
    } else if (formValue && !isValid) {
      return <div className="text-danger">{formValue} is taken</div>;
    }
    return <></>;
  };

  return !username ? (
    <section>
      <h3>Choose username</h3>
      <form onSubmit={onSubmit}>
        <input type="text" value={formValue} onChange={onChange} />
        <UsernameMessage />
        <button type="submit" className="btn-green" disabled={!isValid}>
          Choose
        </button>
        <h3>Debug</h3>
        <div>Username: {formValue}</div>
        <div>Loading: {loading.toString()}</div>
        <div>Username Valid: {isValid.toString()}</div>
      </form>
    </section>
  ) : (
    <></>
  );
};

export default UsernameForm;
