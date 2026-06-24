package com.construction.cloudinary;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CloudinaryService {

    private final Cloudinary cloudinary;

    public CloudinaryResponse uploadImage(
            MultipartFile file
    ) throws IOException {

        Map<?, ?> uploadResult =
                cloudinary.uploader().upload(
                        file.getBytes(),
                        ObjectUtils.emptyMap()
                );

        return CloudinaryResponse.builder()
                .publicId(uploadResult.get("public_id").toString())
                .imageUrl(uploadResult.get("secure_url").toString())
                .message("Image Uploaded Successfully")
                .build();
    }

    public void deleteImage(String publicId)
            throws IOException {

        cloudinary.uploader().destroy(
                publicId,
                ObjectUtils.emptyMap()
        );
    }
}