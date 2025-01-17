import React, { forwardRef, Children } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import {
  ActionIcon,
  useMantineTheme,
  Tooltip,
  DefaultProps,
  ClassNames,
  Box,
  Tabs,
  TabProps,
  TabsProps,
  ScrollArea,
} from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { CopyIcon } from './CopyIcon';
import { getPrismTheme } from './prism-theme';
import { PrismSharedProps } from './types';
import useStyles from './Prism.styles';
import useTabsStyles from './PrismTabs.styles';

export type PrismStylesNames = ClassNames<typeof useStyles>;

export interface PrismProps
  extends DefaultProps<PrismStylesNames>,
    PrismSharedProps,
    Omit<React.ComponentPropsWithRef<'div'>, 'children'> {}

type PrismComponent = ((props: PrismProps) => React.ReactElement) & {
  displayName: string;
  Tab: typeof PrismTab;
  Tabs: typeof PrismTabs;
};

export const Prism: PrismComponent = forwardRef<HTMLDivElement, PrismProps>(
  (
    {
      className,
      children,
      language,
      noCopy = false,
      classNames,
      styles,
      copyLabel = 'Copy code',
      copiedLabel = 'Copied',
      withLineNumbers = false,
      highlightLines = {},
      scrollAreaComponent: ScrollAreaComponent = ScrollArea,
      colorScheme,
      ...others
    }: PrismProps,
    ref
  ) => {
    const theme = useMantineTheme();
    const clipboard = useClipboard();
    const { classes, cx } = useStyles(
      { colorScheme: colorScheme || theme.colorScheme, native: ScrollAreaComponent !== ScrollArea },
      { classNames, styles, name: 'Prism' }
    );

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        {!noCopy && (
          <Tooltip
            className={classes.copy}
            label={clipboard.copied ? copiedLabel : copyLabel}
            position="left"
            placement="center"
            transition="fade"
            withArrow
            arrowSize={4}
            gutter={8}
            color={clipboard.copied ? 'teal' : undefined}
          >
            <ActionIcon
              aria-label={clipboard.copied ? copiedLabel : copyLabel}
              onClick={() => clipboard.copy(children)}
            >
              <CopyIcon copied={clipboard.copied} />
            </ActionIcon>
          </Tooltip>
        )}

        <Highlight
          {...defaultProps}
          theme={getPrismTheme(theme, colorScheme || theme.colorScheme)}
          code={children}
          language={language}
        >
          {({
            className: inheritedClassName,
            style: inheritedStyle,
            tokens,
            getLineProps,
            getTokenProps,
          }) => (
            <ScrollAreaComponent className={classes.scrollArea}>
              <pre className={cx(classes.code, inheritedClassName)} style={inheritedStyle}>
                {tokens
                  .map((line, index) => {
                    if (
                      index === tokens.length - 1 &&
                      line.length === 1 &&
                      line[0].content === '\n'
                    ) {
                      return null;
                    }

                    const lineNumber = index + 1;
                    const lineProps = getLineProps({ line, key: index });
                    const shouldHighlight = lineNumber in highlightLines;
                    const lineColor =
                      theme.colorScheme === 'dark'
                        ? theme.fn.rgba(
                            theme.fn.themeColor(highlightLines[lineNumber]?.color, 9),
                            0.25
                          )
                        : theme.fn.themeColor(highlightLines[lineNumber]?.color, 0);

                    return (
                      <div
                        {...lineProps}
                        className={cx(classes.line, lineProps.className)}
                        style={{ ...(shouldHighlight ? { backgroundColor: lineColor } : null) }}
                      >
                        {withLineNumbers && (
                          <div
                            className={classes.lineNumber}
                            style={{
                              color: shouldHighlight
                                ? theme.fn.themeColor(
                                    highlightLines[lineNumber]?.color,
                                    theme.colorScheme === 'dark' ? 5 : 8
                                  )
                                : undefined,
                            }}
                          >
                            {highlightLines[lineNumber]?.label || lineNumber}
                          </div>
                        )}

                        <div className={classes.lineContent}>
                          {line.map((token, key) => {
                            const tokenProps = getTokenProps({ token, key });
                            return (
                              <span
                                {...tokenProps}
                                style={{
                                  ...tokenProps.style,
                                  color: shouldHighlight
                                    ? theme.fn.themeColor(
                                        highlightLines[lineNumber]?.color,
                                        theme.colorScheme === 'dark' ? 5 : 8
                                      )
                                    : (tokenProps?.style?.color as string),
                                }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    );
                  })
                  .filter(Boolean)}
              </pre>
            </ScrollAreaComponent>
          )}
        </Highlight>
      </Box>
    );
  }
) as any;

export interface PrismTabProps extends PrismSharedProps, Omit<TabProps, 'children'> {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function PrismTab(_props: PrismTabProps) {
  return null;
}

export type PrismTabsStylesNames = ClassNames<typeof useTabsStyles> | PrismStylesNames;
export interface PrismTabsProps
  extends DefaultProps<PrismTabsStylesNames>,
    Omit<TabsProps, 'classNames' | 'styles'> {}

export const PrismTabs = forwardRef<HTMLDivElement, PrismTabsProps>(
  ({ children, classNames, styles, ...others }: PrismTabsProps, ref) => {
    const { classes, cx } = useTabsStyles(null, { name: 'PrismTabs', classNames, styles });

    const tabs = (Children.toArray(children) as React.ReactElement[])
      .filter((child) => child.type === PrismTab)
      .map((child, index) => {
        const { label, icon, ...prismProps } = child.props;
        return (
          <Tabs.Tab label={label} icon={icon} key={index}>
            <Prism
              {...prismProps}
              styles={styles}
              classNames={{ ...classNames, code: cx(classes.code, classNames?.code) }}
            />
          </Tabs.Tab>
        );
      });

    return (
      <Tabs
        ref={ref}
        variant="unstyled"
        tabPadding={0}
        classNames={{
          tabsList: cx(classes.tabs, classNames?.tabs),
          tabActive: cx(classes.tabActive, classNames?.tabActive),
          tabControl: cx(classes.tab, classNames?.tab),
        }}
        {...others}
      >
        {tabs}
      </Tabs>
    );
  }
);

Prism.Tabs = PrismTabs;
Prism.Tab = PrismTab;
Prism.displayName = '@mantine/prism/Prism';
PrismTabs.displayName = '@mantine/prism/Tabs';
PrismTab.displayName = '@mantine/prism/Tab';
