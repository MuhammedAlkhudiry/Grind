import Colors from '../helpers/Colors';

export default class Project {
    constructor(props) {
        props = props ? props : {
            name: 'untitled-project',
            desc: '',
            color: Colors.primary,
            duration: 25,
            icon: 'calendar-check',
            // status: '',
        }
        this.name = props.name;
        this.desc = props.desc;
        this.color = props.color;
        this.duration = props.duration;
        this.icon = props.icon;
        // this.status = props.status
    }
}
