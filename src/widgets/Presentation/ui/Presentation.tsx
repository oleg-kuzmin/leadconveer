import cn from 'classnames';
import { Content, ElementAccentText, ElementSectionTitle, ElementVideo } from '@/shared/ui';
import { PresentationHeader } from './PresentationHeader';
import { PresentationVideoIcon } from './PresentationVideoIcon';
import styles from './Presentation.module.scss';

interface PresentationProps {
  className?: string;
}

export function Presentation({ className }: Readonly<PresentationProps>) {
  return (
    <section className={cn(styles.Presentation, className)}>
      <Content className={styles.Presentation__Content}>
        <PresentationHeader>
          <PresentationVideoIcon className={styles.Presentation__VideoIcon} />
          <ElementSectionTitle className={styles.Presentation__Title}>
            Мы подготовили для вас&nbsp; видео‑презентацию <ElementAccentText>нашей&nbsp;работы</ElementAccentText>
          </ElementSectionTitle>
        </PresentationHeader>
        <ElementVideo
          src="/leadconveer/video/video.mp4"
          type="video/mp4"
          width={1180}
          height={540}
          // poster="/leadconveer/video/poster.png"
        />
      </Content>
    </section>
  );
}
