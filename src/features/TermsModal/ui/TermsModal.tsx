import { memo, useMemo } from 'react';
import { Modal } from '@shared/ui/Modal';
import { Button } from '@shared/ui/Button';
import { termsContent } from '../model/data/termsModal.data';
import { ITerm, ITermType } from '../model/types/TermsModal.types';
import styles from './TermsModal.module.scss';

type TermsModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

const TermsModal = memo(({ isOpen, onClose }: TermsModalProps) => {
	const termsContentMap = useMemo(
		() => ({
			[ITermType.TITLE]: ({ content, styles }: ITerm, key: string) => (
				<h3 key={key} style={styles}>{content}</h3>
			),
			[ITermType.PARAGRAPH]: ({ content, styles }: ITerm, key: string) => (
				<p key={key} style={styles}>{content}</p>
			),
			[ITermType.LIST]: ({ items, styles }: ITerm, key: string) => (
				<ul key={key} style={styles}>
					{items?.map((item, i) => <li key={i}>{item}</li>)}
				</ul>
			),
		}),
		[]
	);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={styles.terms}>
				{termsContent.map((term, i) => termsContentMap[term.type](term, String(i)))}
				<Button className={'m-centred mt-20'} onClick={onClose} fluid>Закрити</Button>
			</div>
		</Modal>
	);
});

export default TermsModal;