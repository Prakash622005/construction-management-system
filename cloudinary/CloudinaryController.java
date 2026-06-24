package com.construction.cloudinary;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/cloudinary")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CloudinaryController {

    private final CloudinaryService cloudinaryService;

    @PostMapping(
            value = "/upload",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public CloudinaryResponse uploadImage(
            @RequestParam("file")
            MultipartFile file
    ) throws Exception {

        return cloudinaryService.uploadImage(file);
    }
}