export function Do(props) {
  return (
    <span>
      <p style={{ color: 'green' }}>Do:</p>
      {props.children}
    </span>
  );
}

export function Dont(props) {
  return (
    <span>
      <p style={{ color: 'red' }}>Do not:</p>
      {props.children}
    </span>
  );
}

export function DoDontCard(props) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        gap: 16,
      }}
    >
      {props.children}
    </div>
  );
}
