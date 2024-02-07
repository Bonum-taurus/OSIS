import { useState } from 'react';
import classNames from 'classnames';
import { ButtonConsultation } from '../ButtonConsultation';
import './Form.scss';

import axios from 'axios';

export const Form = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>(''); 
  const [comment, setComment] = useState<string>('');

  const [isTouchName, setIsTouchName] = useState<number>(0);
  const [isTouchPhone, setIsTouchPhone] = useState<number>(0);

  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorPhone, setErrorPhone] = useState<boolean>(false);

  const [isSpinner, setIsSpinner] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [notSuccess, setNotSuccess] = useState<string>('')

  const paternPhoneSubmit = new RegExp(/^\+380\d{9}$/);
  const paternPhoneInput = new RegExp(/^['+']{1}[0-9]{0,12}$/);
  const paternName = new RegExp(/^[A-Za-zА-Яа-яЁё\s]+$/);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim() === '') {
      setName('');

      return;
    }

    if (!paternName.test(event.target.value)) {
      setName(event.target.value);
      setErrorName(true);

      return;
    }

    setName(event.target.value);
    setErrorName(false);
  }

  const handleFocusName = () => {
    if (isTouchPhone === 1 && !phone) {
      setErrorPhone(true);
    }

    if (isTouchName === 0) {
      setIsTouchName(1);
    }

    setSuccess(false);
  }

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim() === '') {
      setPhone('');

      return;
    }

    if (phone === '' && event.target.value === '+') {
      setPhone('+380');
      setErrorPhone(false);

      return;
    }

    if (!paternPhoneInput.test(event.target.value)) {
      setPhone(event.target.value);
      setErrorPhone(true);

      return;
    }

    setPhone(event.target.value);
    setErrorPhone(false);
  }

  const handleFocusPhone = () => {
    if (isTouchName === 1 && !name) {
      setErrorName(true);
    }

    if (isTouchPhone === 0) {
      setIsTouchPhone(1);
    }

    setSuccess(false);
  }

  const handleChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.trim() === '') {
      setComment('');

      return;
    }
    setComment(event.target.value)
  }

  const handleFocusComment = () => {
    if (!name) {
      setErrorName(true);
    }

    if (!phone) {
      setErrorPhone(true);
    }

    setSuccess(false);
  }

  const reset = () => {
    setName('');
    setPhone('');
    setComment('');
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name) {
      setErrorName(!name);
    }

    if (!paternPhoneSubmit.test(phone)) {
      setErrorPhone(!paternPhoneSubmit.test(phone));
    }

    if (!name || !paternPhoneSubmit.test(phone)) {
      return;
    }

    setIsSpinner(true);
    setNotSuccess('');

    axios.post('https://osis-server.onrender.com/api/cooperation/', 
      {
        name: name,
        phone_number: phone,
        commentary: comment
      })
      .then(() => {
        reset();
        setIsSpinner(false)
        setSuccess(true);
        setIsTouchName(0);
        setIsTouchPhone(0);
      })
      .catch(error => {
        setNotSuccess(error.message);
        window.setTimeout(() => {
          setIsSpinner(false);
        }, 3000)
      })
  }

  return (
    <form 
      className="form"
      onSubmit={onSubmit}
    >
      <label className="form__label">
        <span className="form__name">
          Ім’я*
        </span>

        <div className="form__wrapper-input">
          <input
            onChange={handleChangeName}
            onFocus={handleFocusName}
            value={name}
            className={classNames('form__input', {
              'form__input--error': errorName,
            })}
            name="name" 
            type="text" 
            placeholder="Ваше ім’я"
          />

          {name && (
            <span
              className={classNames('form__input-cross', {
                'form__input-cross--error': errorName,
              })}
              onClick={() => {
                setName('');
                setErrorName(false);
              }}
            ></span>
          )}
        </div>
      </label>

      <label className="form__label">
        <span className="form__name">
          Телефон*
        </span>

        <div className="form__wrapper-input">
          <input
            onChange={handleChangePhone}
            onFocus={handleFocusPhone}
            value={phone}
            className={classNames('form__input form__input--tell', {
              'form__input--error': errorPhone,
            })} 
            name="phone_number"
            type="tell"
            placeholder="+380" 
          />
 
          {!phone && (
            <span className="form__placeholder-tail">
              xxxxxxxxx
            </span>
          )}

          {phone && (
            <span 
              className={classNames('form__input-cross', {
               'form__input-cross--error': errorPhone,
              })}
              onClick={() => {
                setPhone('');
                setErrorPhone(false);
              }}
            ></span>
          )}
        </div>
      </label>

      <label className="form__label">
        <span className="form__name">
          Коментар
        </span>
        <textarea
          onChange={handleChangeComment}
          onFocus={handleFocusComment}
          value={comment}
          name="commentary"
          className="form__textarea"
          placeholder="Що б ви хотіли обговорити?" 
        />
      </label>

      {success && (
        <div className="form__success">
          <span className="form__success-text">
            Ваш запит успішно відправлено. Ми з Вами зв’яжемось.
          </span>
          <span className="form__success-cross"
            onClick={() => setSuccess(false)}
          ></span>
        </div>
      )}

      {notSuccess && (
        <div className="form__not-success">
          <span className="form__not-success-text">
            {notSuccess}
          </span>
        </div>
      )}

      <div className="form__button">
        <ButtonConsultation 
          isSpinner={isSpinner}
          errorName={errorName}
          errorPhone={errorPhone}
        />
      </div>
    </form>
  )
}