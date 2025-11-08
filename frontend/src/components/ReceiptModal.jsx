import React from 'react';

export default function ReceiptModal({ receipt, onClose }) {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '10px' }}>
        <h3> Order Receipt</h3>
        <p>Name: {receipt.name}</p>
        <p>Email: {receipt.email}</p>
        <p>Total: ₹{receipt.total}</p>
        <p>Timestamp: {new Date(receipt.timestamp).toLocaleString()}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
