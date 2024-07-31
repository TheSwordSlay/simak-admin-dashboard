export default function getUrl(which: String) {
    const host = 'http://localhost:5000'
    const version = 'v1'
    
    if (which === "login") {
        return host+'/api/'+version+'/admin/login'
    }

    if (which === "dosen") {
        return host+'/api/'+version+'/dosen'
    }
    if (which === "delete-dosen") {
        return host+'/api/'+version+'/dosen/delete'
    }
    if (which === "add-dosen") {
        return host+'/api/'+version+'/dosen/create'
    }
    if (which === "edit-dosen") {
        return host+'/api/'+version+'/dosen/update/'
    }

    if (which === "mahasiswa") {
        return host+'/api/'+version+'/student'
    }
    if (which === "add-mahasiswa") {
        return host+'/api/'+version+'/student/create'
    }
    if (which === "delete-mahasiswa") {
        return host+'/api/'+version+'/student/delete'
    }
    if (which === "edit-mahasiswa") {
        return host+'/api/'+version+'/student/update/'
    }

    if (which === "dataakademik") {
        return host+'/api/'+version+'/dataakademik'
    }
    if (which === "add-dataakademik") {
        return host+'/api/'+version+'/dataakademik/create'
    }
    if (which === "delete-dataakademik") {
        return host+'/api/'+version+'/dataakademik/delete'
    }
    if (which === "edit-dataakademik") {
        return host+'/api/'+version+'/dataakademik/update/'
    }


    return host
}