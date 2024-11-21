import { ConfigProvider } from "antd";

export default function Button() {
  return (
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '##007bff',
                borderRadius: 20,
            }
        }}
    >
      <button type="primary">primary btn</button>
    </ConfigProvider>
  );
}
