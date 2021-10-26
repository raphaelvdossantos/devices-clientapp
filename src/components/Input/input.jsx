import * as S from "./styles";

export default function Input({ labelText, listID, reference }) {
  if (!labelText) return null;

  return (
    <>
      <S.Label>
        {labelText}
        {listID ? (
          <S.Input
            onFocus={(event) => (event.target.value = "")}
            onChange={(event) => event.target.blur()}
            list={listID}
            ref={reference}
          />
        ) : (
          <S.Input ref={reference} />
        )}
      </S.Label>
      <S.Separator />
    </>
  );
}
