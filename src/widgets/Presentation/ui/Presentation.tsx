import cn from 'classnames';
import { AccentText, Content, SectionTitle, Video } from '@/shared/ui';
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
          <SectionTitle className={styles.Presentation__Title}>
            Мы подготовили для вас&nbsp; видео‑презентацию <AccentText>нашей&nbsp;работы</AccentText>
          </SectionTitle>
        </PresentationHeader>
        <Video src="/leadconveer/video/video.mp4" type="video/mp4" width={1180} height={540} />
      </Content>
    </section>
  );
}
