import * as React from 'react';
import {Card} from '@paraboly/react-native-card';
import Colors from '../../helpers/Colors';

export default function ProjectCard({project, onPress}) {
    return (
        <Card
            title={project['name']}
            iconName={project['icon']}
            onPress={() => onPress()}
            topRightText=""
            bottomRightText={`${project['duration']} mins`}
            iconBackgroundColor= {project['color']}
            textContainerNumberOfLines={2}
            content={project['desc']}
            iconType='MaterialCommunityIcons'
            bottomRightStyle={{
                fontSize: 18,
                fontWeight: 'bold',
                color: Colors.secondary_shade,
            }}
        />
    );
}

