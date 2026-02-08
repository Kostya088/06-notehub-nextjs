"use client";

type ErrorProps = {
  error: Error;
};

export default function Error({ error }: ErrorProps) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        Could not fetch note details. {error.message}
      </h2>
    </>
  );
}
