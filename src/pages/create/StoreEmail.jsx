import React from "react";
import { useState } from "react";
import { StyledButton, StyledInputGroup } from "../../styles";
import { useEffect } from "react";

async function sendEmailCode(email, privateKey) {
  const code = [1, 1, 1, 1, 1, 1].reduce(
    (prev, next) => prev + Math.round(Math.random() * 10),
    ""
  );
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": privateKey,
      "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: "Otailaba98@gmail.com" }],
          subject: "domain.com email address verification",
        },
      ],
      from: { email: "team-support@email.com", name: "domain.com" },
      content: [{ type: "text/plain", value: code }],
    }),
  };
  try {
    await fetch(
      "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
      options
    );
  } catch (error) {
    console.log(error);
  }

  return await code;
}

const StoreEmailPhone = ({ setCanContinue, data, changeHandler }) => {
  const [email, setEmail] = useState({});
  const [code, setCode] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [error, setError] = useState("");

  const handelChange = (e) => {
    changeHandler(e);
    setEmail(e.target.value);
  };

  useEffect(() => {
    setEmail(data.email);
    if (data.email_verified) setCanContinue(true);
  }, []);

  const verifyEmail = async () => {
    if (!code) {
      const codeRundem = await sendEmailCode(
        email,
        process.env.REACT_APP_RAPID_API_X_KEY
      );
      setCode(codeRundem);
      return;
    }
    if (Number(verifyCode) === Number(code)) {
      setCanContinue(true);
      changeHandler({ target: { name: "email_verified", value: true } });
    }
  };

  return (
    <div>
      <StyledInputGroup>
        <label htmlFor="email">
          <h3>Enter Your Email</h3>
        </label>
        <input
          name="email"
          id="email"
          type="email"
          value={data.email}
          onChange={handelChange}
        />
      </StyledInputGroup>
      {code && (
        <StyledInputGroup>
          <label htmlFor="email-conf">
            <h3>Enter Your Email</h3>
          </label>
          <input
            name="verifyCode"
            type="email"
            id="email-conf"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
          />
        </StyledInputGroup>
      )}
      <p>{error}</p>
      {!data.email_verified ? (
        <StyledButton onClick={verifyEmail}>
          {code ? "Varify" : "Send Code"}
        </StyledButton>
      ) : (
        "Your email is verified"
      )}
    </div>
  );
};

export default StoreEmailPhone;
