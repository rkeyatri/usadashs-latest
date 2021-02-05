import { 
    Component,
    ContentChildren,
    QueryList,
    Output,
    EventEmitter,
    AfterContentInit
} from '@angular/core';

import { TabComponent } from '../tab/tab.component';

@Component({
    selector: 'as-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
    @Output() switchTab = new EventEmitter<TabComponent>();

    ngAfterContentInit() {
        const activeTabs = this.tabs.filter((tab) => tab.active);
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    selectTab(tab: TabComponent) {
        this.tabs.toArray().forEach(item => item.active = false);
        tab.active = true;
        this.switchTab.emit(tab);
    }
}
