import React from 'react';
import dedent from 'ts-dedent';

const basic = `
import React from 'react';
import { useResponsive } from '@bankiru/ui-kit/core/hooks/responsive';

function App({ deviceType /* Приходит с сервера и определяется по User-Agent */ }) {
	const [device, ref] = useResponsive({ device: deviceType });

	return (
		<div ref={ref}>
			<Component device={device}/>
		</div>
	);
}

function Component ({ device }) {
	return (
		<div>
			{device === 'mobile' && <div>You use mobile device</div>}
			{device === 'tablet' && <div>You use tablet device</div>}
			{device === 'desktop' && <div>You use desktop device</div>}
		</div>
	);
}
`;

export const Basic = () => 'Нажмите кнопку `Show code`';

Basic.parameters = {
	docs: {
		source: {
			code: basic,
		},
	},
};

export default {
	title: 'Hooks/useResponsive',
	component: Basic,
};

const context = `
import React, { useContext } from 'react';
import Button from '@bankiru/ui-kit/core/Button';
import { useResponsive } from '@bankiru/ui-kit/core/hooks/responsive';

const ResponsiveContext = React.createContext({});

function App ({ deviceType /* Приходит с сервера и определяется по User-Agent */ }) {
	const [device, ref] = useResponsive({ device: deviceType });

	return (
		<ResponsiveContext.Provider value={device}>
			<div ref={ref}>
				<Component />
			</div>
		</ResponsiveContext.Provider>
	);
}

function Component() {
	const { device } = useContext(ResponsiveContext);
	
	let size;
	if(device === 'desktop') { size = 'h56' }
	else if(device === 'tablet') { size = 'h48' }
	else { size = 'h40' }

	return (
		<div>
			{device === 'mobile' && <div>You use mobile device</div>}
			{device === 'tablet' && <div>You use tablet device</div>}
			{device === 'desktop' && <div>You use desktop device</div>}
			<Button size={ size } >Button</Button>
		</div>
	);
}
`;

export const Context = () => 'Нажмите кнопку `Show code`';

Context.parameters = {
	docs: {
		source: {
			code: context,
		},
	},
};

const utilsBasic = `
import React, { useContext } from 'react';
import Button from '@bankiru/ui-kit/core/Button';
import { useResponsive, convertResponsive } from '@bankiru/ui-kit/core/hooks/responsive';

const ResponsiveContext = React.createContext({});

function App ({ deviceType /* Приходит с сервера и определяется по User-Agent */ }) {
	const [device, ref] = useResponsive({ device: deviceType });

	return (
		<ResponsiveContext.Provider value={device}>
			<div ref={ref}>
				<Component />
			</div>
		</ResponsiveContext.Provider>
	);
}

function Component() {
	const { device } = useContext(ResponsiveContext);

	return (
		<div>
			{device === 'mobile' && <div>You use mobile device</div>}
			{device === 'tablet' && <div>You use tablet device</div>}
			{device === 'desktop' && <div>You use desktop device</div>}
			<Button size={ convertResponsive(device)({desktop: 'h56', tablet: 'h48', mobile: 'h40'}) } >Button</Button>
		</div>
	);
}
`;

export const UtilsBasic = () => 'Нажмите кнопку `Show code`';

UtilsBasic.parameters = {
	docs: {
		source: {
			code: utilsBasic,
		},
	},
};

const utilsRoot = `
import React, { useContext } from 'react';
import Button from '@bankiru/ui-kit/core/Button';
import { useResponsive, convertResponsive } from '@bankiru/ui-kit/core/hooks/responsive';

const ResponsiveContext = React.createContext({});

function App ({ deviceType /* Приходит с сервера и определяется по User-Agent */ }) {
	const [device, ref] = useResponsive({ device: deviceType });
	const toValue = convertResponsive(device);

	return (
		<ResponsiveContext.Provider value={toValue}>
			<div ref={ref}>
				<Component />
			</div>
		</ResponsiveContext.Provider>
	);
}

function Component() {
	const { toValue } = useContext(ResponsiveContext);

	return (
		<div>
			{toValue({mobile: true}) && <div>You use mobile device</div>}
			{toValue({tablet: true}) && <div>You use tablet device</div>}
			{toValue({desktop: true}) && <div>You use desktop device</div>}
			<Button size={ toValue({desktop: 'h56', tablet: 'h48', mobile: 'h40'}) } >Button</Button>
		</div>
	);
}
`;

export const UtilsRoot = () => 'Нажмите кнопку `Show code`';

UtilsRoot.parameters = {
	docs: {
		source: {
			code: utilsRoot,
		},
	},
};

const utilsShort = `
import React, { useContext } from 'react';
import Button from '@bankiru/ui-kit/core/Button';
import { useResponsive, convertResponsive } from '@bankiru/ui-kit/core/hooks/responsive';

const ResponsiveContext = React.createContext({});

function App ({ deviceType /* Приходит с сервера и определяется по User-Agent */ }) {
	const [device, ref] = useResponsive({ device: deviceType });
	const toValue = convertResponsive(device, true);

	return (
		<ResponsiveContext.Provider value={toValue}>
			<div ref={ref}>
				<Component />
			</div>
		</ResponsiveContext.Provider>
	);
}

function Component() {
	const { toValue } = useContext(ResponsiveContext);

	return (
		<div>
			{toValue({m: true}) && <div>You use mobile device</div>}
			{toValue({t: true}) && <div>You use tablet device</div>}
			{toValue({d: true}) && <div>You use desktop device</div>}
			<Button size={ toValue({d: 'h56', t: 'h48', m: 'h40'}) } >Button</Button>
		</div>
	);
}
`;

export const UtilsShort = () => 'Нажмите кнопку `Show code`';

UtilsShort.parameters = {
	docs: {
		source: {
			code: utilsShort,
		},
	},
};

const customQuery = `
import React, { useContext } from 'react';
import { useResponsive } from '@bankiru/ui-kit/core/hooks/responsive';
const ResponsiveContext = React.createContext({});

function App({ deviceType /* Приходит с сервера и определяется по User-Agent */ }) {
	const [device, ref, customDevice] = useResponsive({
		device: deviceType,
		queries: {
			media: {
				isMobileLandscape: '(max-width: 568px)', // см. https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/media
			},
			observer: {
				isMobileLandscape: width => width <= 568,
			}
		}
	});

	return (
		<ResponsiveContext.Provider value={{device, customDevice}}>
			<div ref={ref}>
				<Component />
			</div>
		</ResponsiveContext.Provider>
	);
}

function Component () {
	const { device, customDevice } = useContext(ResponsiveContext);

	return (
		<div>
			{device === 'mobile' && <div>You use mobile device</div>}
			{customDevice.isMobileLandscape === true && <div>You use mobile landscape device</div>}
			{device === 'tablet' && <div>You use tablet device</div>}
			{device === 'desktop' && <div>You use desktop device</div>}
		</div>
	);
}
`;

export const CustomQuery = () => 'Нажмите кнопку `Show code`';

CustomQuery.parameters = {
	docs: {
		source: {
			code: customQuery,
		},
	},
};

const onlyMedia = `
import React from 'react';
import { useMatchMedia } from '@bankiru/ui-kit/core/hooks/responsive/useMatchMedia';

function App({ deviceType /* Приходит с сервера и определяется по User-Agent */ }) {
	// используется только Madia Api см. https://developer.mozilla.org/ru/docs/Web/API/Window/matchMedia
	const [device] = useMatchMedia({ device: deviceType });

	return (
		<Component device={device}/>
	);
}

function Component ({ device }) {
	return (
		<div>
			{device === 'mobile' && <div>You use mobile device</div>}
			{device === 'tablet' && <div>You use tablet device</div>}
			{device === 'desktop' && <div>You use desktop device</div>}
		</div>
	);
}
`;

export const OnlyMedia = () => 'Нажмите кнопку `Show code`';

OnlyMedia.parameters = {
	docs: {
		source: {
			code: onlyMedia,
		},
	},
};

const onlyMediaCustom = `
import React from 'react';
import { useMatchMedia } from '@bankiru/ui-kit/core/hooks/responsive/useMatchMedia';

function App({ deviceType /* Приходит с сервера и определяется по User-Agent */ }) {
	// используется только Madia Api см. https://developer.mozilla.org/ru/docs/Web/API/Window/matchMedia
	const [device, customDevice] = useMatchMedia({ 
		device: deviceType,
		media: {
			isMobileLandscape: '(max-width: 568px)' // см. https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/media
		}
	});

	return (
		<Component device={device} customDevice={customDevice}/>
	);
}

function Component ({ device, customDevice }) {
	return (
		<div>
			{device === 'mobile' && <div>You use mobile device</div>}
			{customDevice.isMobileLandscape === true && <div>You use mobile landscape device</div>}
			{device === 'tablet' && <div>You use tablet device</div>}
			{device === 'desktop' && <div>You use desktop device</div>}
		</div>
	);
}
`;

export const OnlyMediaCustom = () => 'Нажмите кнопку `Show code`';

OnlyMediaCustom.parameters = {
	docs: {
		source: {
			code: onlyMediaCustom,
		},
	},
};

const onlyObserver = `
import React from 'react';
import { useResizeObserver } from '@bankiru/ui-kit/core/hooks/responsive/useResizeObserver';

function App({ deviceType /* Приходит с сервера и определяется по User-Agent */ }) {
	// используется только ResizeObserver Api см. https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
	const [device, ref] = useResizeObserver({ device: deviceType });

	return (
		<div ref={ref}>
			<Component device={device}/>
		</div>
	);
}

function Component ({ device }) {
	return (
		<div>
			{device === 'mobile' && <div>You use mobile device</div>}
			{device === 'tablet' && <div>You use tablet device</div>}
			{device === 'desktop' && <div>You use desktop device</div>}
		</div>
	);
}
`;

export const OnlyObserver = () => 'Нажмите кнопку `Show code`';

OnlyObserver.parameters = {
	docs: {
		source: {
			code: onlyObserver,
		},
	},
};
const onlyObserverCustom = `
import React from 'react';
import { useResizeObserver } from '@bankiru/ui-kit/core/hooks/responsive/useResizeObserver';

function App({ deviceType /* Приходит с сервера и определяется по User-Agent */ }) {
	// используется только ResizeObserver Api см. https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
	const [device, ref, customDevice] = useResizeObserver({ 
		device: deviceType,
		observer: {
			isMobileLandscape: width => width <= 568,
		}
	});

	return (
		<div ref={ref}>
			<Component device={device} customDevice={customDevice}/>
		</div>
	);
}

function Component ({ device, customDevice }) {
	return (
		<div>
			{device === 'mobile' && <div>You use mobile device</div>}
			{customDevice.isMobileLandscape === true && <div>You use mobile landscape device</div>}
			{device === 'tablet' && <div>You use tablet device</div>}
			{device === 'desktop' && <div>You use desktop device</div>}
		</div>
	);
}
`;

export const OnlyObserverCustom = () => 'Нажмите кнопку `Show code`';

OnlyObserverCustom.parameters = {
	docs: {
		source: {
			code: onlyObserverCustom,
		},
	},
};
