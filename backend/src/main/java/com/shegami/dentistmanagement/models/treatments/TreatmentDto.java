package com.shegami.dentistmanagement.models.treatments;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.io.Serializable;

/**
 * DTO for {@link com.shegami.dentistmanagement.entities.Treatment}
 */
@AllArgsConstructor
@Getter
public class TreatmentDto implements Serializable {
    @NotNull
    private final String name;
    @NotNull
    private final String duration;
    @NotNull
    private final int price;
    @Min(1)
    private final int sessions;
}