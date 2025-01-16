type HandleSubsAndPhone = {
	setCookie: (key: string, value: string) => void;
	phone?: string;
	subs?: Record<string, string>;
};

export const handleSubsAndPhone = (props: HandleSubsAndPhone) => {
	const { setCookie, subs, phone } = props;

	if (subs) {
		Object.entries(subs).forEach(([key, value]) => {
			if (value) {
				setCookie(key, value);
			}
		});
	}

	if (phone) {
		setCookie('phone', phone);
	}
};