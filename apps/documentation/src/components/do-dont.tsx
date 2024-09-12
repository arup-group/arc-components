export function Do(props) {
  return (
    <div style={{ background: 'lightgrey', padding: 8, borderRadius: 4 }}>
      <p style={{ color: 'green' }}>Do:</p>
      {props.children}
    </div>
  );
}

export function Dont(props) {
  return (
    <div style={{ background: 'lightgrey', padding: 8, borderRadius: 4 }}>
      <p style={{ color: 'red' }}>Do not:</p>
      {props.children}
    </div>
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
