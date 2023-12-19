import {Component} from '@angular/core';
import {FileService} from "../service/file.service";
import {HttpErrorResponse, HttpEvent, HttpEventType} from "@angular/common/http";
import {saveAs} from 'file-saver';

@Component({
    selector: 'app-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.css']
})
export class FileComponent {
    filenames: string[] = [];
    fileStatus = {status: '', requestType: '', percent: 0};

    constructor(private fileService: FileService) {
    }

    // define a function to upload files
    onUploadFiles(event: any): void {
        let files = event.target.files[0];
        const formData = new FormData();
        formData.append('files', files)
        this.fileService.upload(formData).subscribe(
            event => {
                console.log(event);
                this.resportProgress(event);
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            }
        );
        // const formData = new FormData();
        // if (files) {
        //   files = Array.from(files);
        //   const formData = new FormData();
        //   for (const file of files) {
        //     formData.append('files', file, file.name);
        //   }
        // }
        // this.fileService.upload(formData).subscribe(
        //   event => {
        //     console.log(event);
        //     this.resportProgress(event);
        //   },
        //   (error: HttpErrorResponse) => {
        //     console.log(error);
        //   }
        // );
    }

    // define a function to download files
    onDownloadFile(filename: string): void {
        this.fileService.download(filename).subscribe(
            event => {
                console.log(event);
                this.resportProgress(event);
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            }
        );
    }

    private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
        switch (httpEvent.type) {
            case HttpEventType.UploadProgress:
                this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
                break;
            case HttpEventType.DownloadProgress:
                this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Downloading... ');
                break;
            case HttpEventType.ResponseHeader:
                console.log('Header returned', httpEvent);
                break;
            case HttpEventType.Response:
                if (httpEvent.body instanceof Array) {
                    this.fileStatus.status = 'done';
                    for (const filename of httpEvent.body) {
                        this.filenames.unshift(filename);
                    }
                } else {
                    saveAs(new File([httpEvent.body!], httpEvent.headers.get('File-Name')!,
                        {type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}));
                    httpEvent.headers.get('File-Name');

                    // saveAs(new Blob([httpEvent.body!],
                    //   { type: `${httpEvent.headers.get('Content-Type')};charset=utf-8`}),
                    //    httpEvent.headers.get('File-Name'));
                }
                this.fileStatus.status = 'done';
                break;
            default:
                console.log(httpEvent);
                break;

        }
    }

    private updateStatus(loaded: number, total: number, requestType: string): void {
        this.fileStatus.status = 'progress';
        this.fileStatus.requestType = requestType;
        this.fileStatus.percent = Math.round(100 * loaded / total);
    }
}
