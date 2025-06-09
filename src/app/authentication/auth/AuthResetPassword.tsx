"use client";
import { useState } from "react";
import { Button, TextField, Stack, Alert } from "@mui/material";

type Props = {
  subtext?: React.ReactNode;
  subtitle?: React.ReactNode;
};

const AuthResetPassword = ({ subtext, subtitle }: Props) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleReset = async () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setError("");
      // ✅ ส่งคำขอ reset ไปยัง backend หรือ API
      // ตัวอย่างจำลอง:
      await new Promise((res) => setTimeout(res, 1000));
      // สมมติว่าทำสำเร็จ:
      setSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {subtext}
      <Stack spacing={2}>
        {success ? (
          <Alert severity="success">
            If your email is registered, a reset link has been sent.
          </Alert>
        ) : (
          <>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <Alert severity="error">{error}</Alert>}
            <Button variant="contained" color="primary" fullWidth onClick={handleReset}>
              Send Reset Link
            </Button>
          </>
        )}
      </Stack>
      {subtitle}
    </>
  );
};

export default AuthResetPassword;
