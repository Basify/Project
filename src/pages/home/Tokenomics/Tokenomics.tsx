import {
  Box,
  Center,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { HeadingComponent } from '../../../util/Ui';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { PageWrapper } from '../../../util/PageWrapper';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Tokenomics = () => {
  const chartBorderColor = useColorModeValue('white', '#1A202C');
  const data = {
    labels: [
      '50% | Presale',
      '29% | Liquidity',
      '3% | Community Building',
      '5% | CeX',
      '5% | Staking',
      '8% | Marketing',
    ],
    datasets: [
      {
        data: [50, 29, 3, 5, 5, 8],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
        ],
        borderColor: [
          chartBorderColor,
          chartBorderColor,
          chartBorderColor,
          chartBorderColor,
          chartBorderColor,
          chartBorderColor,
        ],
        borderWidth: 10,
        borderRadius: 10,
        // circumference: 180,
        // rotation: 270,
      },
    ],
  };
  return (
    <PageWrapper>
      <HeadingComponent
        heading="Community centric"
        gradientHeading="TOKENOMICS"
      ></HeadingComponent>
      <VStack boxSize={[400, 500, 600]}>
        <Doughnut
          data={data}
          options={{
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                fullSize: true,
                labels: {
                  font: {
                    size: useBreakpointValue(
                      {
                        base: 17,
                        md: 20,
                      },
                      {
                        fallback: 'md',
                      }
                    ),
                  },
                },
              },
            },
            maintainAspectRatio: true,
          }}
        />
      </VStack>
    </PageWrapper>
  );
};
