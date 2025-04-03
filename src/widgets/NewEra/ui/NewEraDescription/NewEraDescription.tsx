'use client';

import { useState } from 'react';
import cn from 'classnames';
import { StarIcon } from '@/shared/ui';
import { DescriptionButtonMore } from './DescriptionButtonMore';
import { DescriptionParagraph } from './DescriptionParagraph';
import { DescriptionText } from './DescriptionText';
import styles from './NewEraDescription.module.scss';

interface NewEraDescriptionProps {
  className?: string;
}

export function NewEraDescription({ className }: Readonly<NewEraDescriptionProps>) {
  const [isMore, setIsMore] = useState(false);

  const handleButtonMore = () => {
    setIsMore(!isMore);
  };

  return (
    <div className={cn(styles.NewEraDescription, className)}>
      <StarIcon className={styles.NewEraDescription__Star} icon="newEra" />
      <DescriptionText>
        <DescriptionParagraph>
          Использование лидогенерации снижает стоимость привлечения клиентов, позволяет бизнесу сосредоточиться на
          основном продукте и значительно упрощает процесс работы.
        </DescriptionParagraph>
        <DescriptionParagraph>
          Стоимость заявок на нашей платформе зависит от их качества и сложности. Мы предоставляем прозрачные тарифы и
          выгодные условия сотрудничества.
        </DescriptionParagraph>
        <DescriptionParagraph>
          Наша биржа — это место встречи тех, кто заказывает заявки, и тех, кто их предоставляет. Мы создаём условия для
          успешного сотрудничества и взаимной выгоды.
        </DescriptionParagraph>
        {isMore && (
          <>
            <DescriptionParagraph>
              Биржа лидов — это современное решение для бизнеса, которое позволяет эффективно находить новых клиентов и
              масштабировать свою деятельность.
            </DescriptionParagraph>
            <DescriptionParagraph>
              Использование биржи помогает оптимизировать стоимость привлечения заявок и получить готовые решения для
              лидогенерации. Наш сервис предоставляет уникальную возможность купить или продать лиды, обеспечивая
              прозрачность и надёжность каждой сделки.
            </DescriptionParagraph>
            <DescriptionParagraph>
              Мы объединяем вебмастеров, готовых передать заявки, и бизнесы, которым нужны новые клиенты. На нашей
              платформе вебмастеры размещают готовые заявки, которые затем приобретаются бизнесами для привлечения новых
              клиентов. Это упрощает процесс взаимодействия и повышает эффективность работы. Каждая заявка проходит
              тщательную проверку, чтобы обеспечить максимальную ценность для бизнеса.
            </DescriptionParagraph>
            <DescriptionParagraph>
              Вы покупаете лиды, уже готовые к взаимодействию, и получаете гарантированный результат.
            </DescriptionParagraph>
          </>
        )}
      </DescriptionText>
      <DescriptionButtonMore
        className={styles.NewEraDescription__ButtonMore}
        onClick={handleButtonMore}
        text={isMore ? 'Скрыть' : 'Читать больше'}
      />
    </div>
  );
}
