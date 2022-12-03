import { PreviewPane, Col } from 'src/Components/Playground/PreviewPane';
import { Button as AntdButton } from 'antd';

function NotePage() {
  return (
    <main className="flex flex-col items-center justify-evenly gap-7 text-black">
      <PreviewPane title="Buttons like you used to build them">
        <Col title="Ant">
          <AntdButton className="bg-orange-400" type="primary">
            Label
          </AntdButton>
        </Col>
      </PreviewPane>
    </main>
  );
}

export default NotePage;
