import { PreviewPane, Col } from 'src/components/Playground/PreviewPane';
import { Button as AntdButton } from 'antd';
import { useTranslation, Trans } from 'react-i18next';

function NotePage() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-evenly gap-7 text-black">
      <PreviewPane title="Preview">
        <Col title="Ant Button">
          <AntdButton className="bg-orange-400" type="primary">
            <Trans i18nKey="description.part1">Translation</Trans>
          </AntdButton>
        </Col>
        <Col title="Ant Button 2">
          <AntdButton className="bg-orange-400" type="primary">
            {t('description.part2')}
          </AntdButton>
        </Col>
      </PreviewPane>
    </main>
  );
}

export default NotePage;
