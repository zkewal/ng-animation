import { trigger, style, state, animate, transition, AnimationMetadata } from '@angular/animations';

export class DpAppAnimations {

    SetTrigger(nameTrigger: string, setNewsStates?: AnimationMetadata[], setNewTransitions?: AnimationMetadata[]): any {
        let metaData: AnimationMetadata[] = animationStyle();
        if (setNewsStates) {
            metaData.concat(setNewsStates);
        }

        if (setNewTransitions) {
            metaData.concat(setNewTransitions);
        }

        return trigger(nameTrigger, metaData);
    }
}

function animationStyle(): any[] {
    let retArr = [];
    retArr.push(state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
    })));

    retArr.push(state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
    })));

    retArr.push(
        transition('inactive => active', animate('100ms ease-in'))
    );

    retArr.push(
        transition('active => inactive', animate('100ms ease-out'))
    );

    return retArr;
}
